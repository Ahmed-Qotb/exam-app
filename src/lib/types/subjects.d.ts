export type subject = {
  name: string;
  icon: string;
} & dataBaseProbs;

export type singleSubject = {
  category: {
    name: string;
    icon: string;
  } & dataBaseProbs;
};

export type subjects = {
  subjects: subject[];
};
