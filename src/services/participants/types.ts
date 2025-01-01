export type PostParticipantResponse = {
  data: {
    id: number;
    attributes: {
      firstName: string;
      lastName: string;
      email: string,
      createdAt: string,
      updatedAt: string,
    },
  },
};
