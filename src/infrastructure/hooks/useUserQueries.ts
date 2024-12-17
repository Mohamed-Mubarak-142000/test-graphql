import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { container } from "@/infrastructure/di/posts";
import { TYPES } from "@/infrastructure/di/types";
import { UserRepository } from "@/adapters/gateways/UserRepository";
import { User } from "@/core/entities/User";
import { toast } from "sonner";

export const useUserQueries = () => {
  const userRepository = container.get<UserRepository>(TYPES.UserRepository);
  const queryClient = useQueryClient();

  const useUsers = () =>
    useQuery<User[]>({
      queryKey: ["users"],
      queryFn: () => userRepository.getUsers(),
    });

  // const useCreateUser = () =>
  //   useMutation(
  //     {
  //       mutationFn: (user: User) => userRepository.createUser(user),
  //       onSuccess: () => queryClient.refetchQueries({ queryKey: ["users"] }),
  //       onError: (error) => {
  //         toast.error(error.message);
  //       }
  //     }
  //   );

  // const useUpdateUser = () =>
  //   useMutation(
  //     {
  //       mutationFn: (user: User) => userRepository.updateUser(Number(user?.id ?? 0),user),
  //       onSuccess: () => queryClient.refetchQueries({ queryKey: ["users"] }),
  //       onError: (error) => {
  //         toast.error(error.message);
  //       }
  //     }
  //   );

  const useDeleteUser = () =>
    useMutation({
      mutationFn: (id: string) => userRepository.deleteUser(id),
      onSuccess: () => queryClient.refetchQueries({ queryKey: ["users"] }),
      onError: (error) => {
        toast.error(error.message);
      },
    });

  return {
    useUsers,
    // useCreateUser, useUpdateUser,
    useDeleteUser,
  };
};
