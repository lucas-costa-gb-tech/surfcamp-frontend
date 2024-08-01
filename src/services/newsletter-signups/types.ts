export type PostNewsletterSignupResponse = {
  data: {
    id: number;
    attributes: {
      email: string,
      createdAt: string,
      updatedAt: string,
    },
  },
};
