import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useGetAllReviews, useSubmitReview } from "@/hooks/useQueries";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const seedReviews = [
  {
    id: "r1",
    name: "Ramesh Sharma",
    rating: 5,
    comment:
      "Best kaju katli in entire Chittorgarh! Been a loyal customer for 15 years. The quality is consistently amazing.",
  },
  {
    id: "r2",
    name: "Sunita Patel",
    rating: 5,
    comment:
      "Ordered gulab jamuns for my daughter's wedding — everyone loved them! Freshness and taste are unmatched.",
  },
  {
    id: "r3",
    name: "Vikram Singh",
    rating: 4,
    comment:
      "Excellent quality sweets. The motichoor ladoos are perfectly sized and taste divine. Highly recommended!",
  },
  {
    id: "r4",
    name: "Priya Joshi",
    rating: 5,
    comment:
      "We always buy our Diwali gifts from Vinay Sweets. Their gift boxes are beautifully presented and taste heavenly.",
  },
  {
    id: "r5",
    name: "Arun Gupta",
    rating: 4,
    comment:
      "The barfi varieties here are outstanding. Love the kesar barfi — you can actually taste the real saffron!",
  },
  {
    id: "r6",
    name: "Meena Trivedi",
    rating: 5,
    comment:
      "Pure ghee, real ingredients, no artificial flavours. This is what traditional sweets should taste like!",
  },
];

function StarSelector({
  value,
  onChange,
}: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          data-ocid="reviews.toggle"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            className="w-7 h-7"
            fill={(hovered || value) >= star ? "#C8A24A" : "none"}
            stroke={(hovered || value) >= star ? "#C8A24A" : "currentColor"}
          />
        </button>
      ))}
    </div>
  );
}

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className="w-4 h-4"
          fill={rating >= s ? "#C8A24A" : "none"}
          stroke={rating >= s ? "#C8A24A" : "#aaa"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { data: backendReviews = [] } = useGetAllReviews();
  const submitMutation = useSubmitReview();
  const [form, setForm] = useState({ name: "", rating: 0, comment: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.rating === 0 || !form.comment.trim()) {
      toast.error("Please fill all fields and select a rating.");
      return;
    }
    await submitMutation.mutateAsync({
      name: form.name,
      rating: form.rating,
      comment: form.comment,
    });
    toast.success("Thank you for your review!");
    setForm({ name: "", rating: 0, comment: "" });
  };

  // Merge backend reviews with seed reviews; backend first
  const displayReviews = [
    ...backendReviews.map((r, i) => ({ id: `backend-${i}`, ...r })),
    ...seedReviews,
  ].slice(0, 6);

  return (
    <div className="bg-cream-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-medium">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-burgundy uppercase tracking-tight">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Reviews Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          data-ocid="reviews.list"
        >
          {displayReviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-ocid={`reviews.item.${i + 1}`}
              className="bg-card rounded-lg p-6 shadow-sweet flex flex-col gap-3"
            >
              <StarDisplay rating={review.rating} />
              <p className="text-foreground/80 text-sm leading-relaxed italic">
                "{review.comment}"
              </p>
              <div className="mt-auto pt-3 border-t border-border">
                <p className="font-semibold text-burgundy text-sm">
                  {review.name}
                </p>
              </div>
            </motion.div>
          ))}
          {displayReviews.length === 0 && (
            <div
              data-ocid="reviews.empty_state"
              className="col-span-3 text-center text-muted-foreground py-10"
            >
              No reviews yet. Be the first to share your experience!
            </div>
          )}
        </div>

        {/* Submit Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-8 shadow-sweet max-w-2xl mx-auto"
        >
          <h3 className="font-serif text-2xl font-bold text-burgundy mb-6 text-center">
            Share Your Experience
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <Label
                htmlFor="review-name"
                className="text-sm font-medium mb-1.5 block"
              >
                Your Name
              </Label>
              <Input
                id="review-name"
                data-ocid="reviews.input"
                placeholder="e.g. Ramesh Kumar"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-1.5 block">Rating</Label>
              <StarSelector
                value={form.rating}
                onChange={(v) => setForm((p) => ({ ...p, rating: v }))}
              />
            </div>
            <div>
              <Label
                htmlFor="review-comment"
                className="text-sm font-medium mb-1.5 block"
              >
                Your Review
              </Label>
              <Textarea
                id="review-comment"
                data-ocid="reviews.textarea"
                placeholder="Tell us about your experience..."
                rows={4}
                value={form.comment}
                onChange={(e) =>
                  setForm((p) => ({ ...p, comment: e.target.value }))
                }
              />
            </div>
            <Button
              type="submit"
              data-ocid="reviews.submit_button"
              disabled={submitMutation.isPending}
              className="bg-burgundy text-primary-foreground hover:bg-burgundy-dark w-full py-3 font-semibold tracking-wide"
            >
              {submitMutation.isPending ? "Submitting..." : "Submit Review"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
