// import { getUserProfileDetails } from "@/src/api/user";
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// // Create store with persistence
// export const useUserStore = create(
//   persist(
//     (set, get) => ({
//       // Initial state
//       profile: null,
//       stats: null,
//       isLoading: false,
//       error: null,

//       // Actions
//       setProfile: (profile) => set({ profile }),
//       setStats: (stats) => set({ stats }),

//       updateProfile: (updates) =>
//         set((state) => ({
//           profile: state.profile ? { ...state.profile, ...updates } : null,
//         })),

//       updateStats: (updates) =>
//         set((state) => ({
//           stats: state.stats ? { ...state.stats, ...updates } : null,
//         })),

//       setError: (error) => set({ error }),
//       setLoading: (loading) => set({ isLoading: loading }),

//       clearStore: () =>
//         set({
//           profile: null,
//           stats: null,
//           error: null,
//           isLoading: false,
//         }),

//       // Initialize store with API data
//       initializeStore: async () => {
//         console.log("debug initializing");
//         const { setError, setLoading, setProfile, setStats } = get();

//         try {
//           setLoading(true);

//           // Make your API calls here
//           const [profileResponse, statsResponse] = await Promise.all([
//             getUserProfileDetails(),
//             fetch("/api/user/stats"),
//           ]);

//           const profileData = await profileResponse.data.data;
//           // console.log("debug profileData", profileData);
//           // const statsData = await statsResponse.json();

//           // console.log("debug setting profile");
//           setProfile({
//             name: profileData.name,
//             email: profileData.email,
//             profile_url: profileData.profile_url,
//             handle: profileData.handle,
//             college_name: profileData.college_name,
//             location: profileData.location,
//             github_url: profileData.github_url,
//             communication_language_preference:
//               profileData.communication_language_preference,
//             coding_language_preference: profileData.coding_language_preference,
//             plan_type: profileData.plan_type,
//             credit_remaining_in_cents: profileData.credit_remaining_in_cents,
//             phone_number: profileData.phone_number,
//             stream: profileData.stream,
//             graduation_year: profileData.graduation_year,
//             advanced_credits_in_cents: profileData.advanced_credits_in_cents,
//             tags: [],
//           });

//           // setStats({
//           //   totalSolved: statsData.total_solved,
//           //   totalAttempted: statsData.total_attempted,
//           //   streak: statsData.streak
//           // });

//           setError(null);
//         } catch (error) {
//           console.log("debug failed to initialize store", error);
//           setError(
//             error instanceof Error
//               ? error.message
//               : "Failed to initialize store"
//           );
//         } finally {
//           setLoading(false);
//         }
//       },

//     }),
//     {
//       name: "user-store", // unique name for localStorage
//       partialize: (state) => ({ profile: state.profile, stats: state.stats }), // only persist these fields
//     }
//   )
// );

// // Optional: Create hooks for specific store values
// export const useUserProfile = () => useUserStore((state) => state.profile);
// export const useUserStats = () => useUserStore((state) => state.stats);
