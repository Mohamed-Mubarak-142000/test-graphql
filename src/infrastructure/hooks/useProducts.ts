import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { container } from "@/infrastructure/di/posts";
import { TYPES } from "@/infrastructure/di/types";
import { ProductRepository } from "@/adapters/gateways/ProductRepository";
import { Product } from "@/core/entities/Product";
import { toast } from "sonner";

export const useProductQueries = () => {
  const ProductRepository = container.get<ProductRepository>(
    TYPES.ProductRepository
  );
  const queryClient = useQueryClient();

  const useGetAllProducts = () =>
    useQuery<Product[]>({
      queryKey: ["products"],
      queryFn: () => ProductRepository.getProducts(),
    });

  const useDeleteProduct = () =>
    useMutation({
      mutationFn: (id: string) => ProductRepository.deleteProduct(id),
      onSuccess: () => queryClient.refetchQueries({ queryKey: ["products"] }),
      onError: (error) => {
        toast.error(error.message);
      },
    });

  return {
    useGetAllProducts,
    useDeleteProduct,
  };
};
