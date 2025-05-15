export type Subject = {
  name: string;
  icon: string;
} & DatabaseProps;

export type SingleSubject = {
  category: {
    name: string;
    icon: string;
  } & DatabaseProps;
};

export type Subjects = {
  subjects: Subject[];
};
