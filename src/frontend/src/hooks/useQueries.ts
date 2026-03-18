import type { Review } from "@/backend.d";
import { useActor } from "@/hooks/useActor";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type { Review };

export function useGetAllReviews() {
  const { actor, isFetching } = useActor();
  return useQuery<Review[]>({
    queryKey: ["reviews"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitReview() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      rating,
      comment,
    }: {
      name: string;
      rating: number;
      comment: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitReview(name, rating, comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
}
