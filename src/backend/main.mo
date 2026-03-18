import Array "mo:core/Array";
import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type and storage
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Review system - open to all users including guests
  type Review = {
    name : Text;
    rating : Nat8;
    comment : Text;
    timestamp : Time.Time;
  };

  var reviews = List.empty<Review>();

  // Public review submission - no authentication required (guests allowed)
  public shared ({ caller }) func submitReview(name : Text, rating : Nat8, comment : Text) : async () {
    if (rating < 1 or rating > 5) {
      return;
    };

    let review : Review = {
      name;
      rating;
      comment;
      timestamp = Time.now();
    };

    reviews.add(review);
  };

  // Public review viewing - no authentication required (guests allowed)
  public query ({ caller }) func getAllReviews() : async [Review] {
    reviews.toArray();
  };
};
