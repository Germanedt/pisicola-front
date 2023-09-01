interface INavigationLink {
  title: string;
  route?: string;
  icon: string;
  actions?: ISublink[];
  roles: number[];
}
interface ISublink {
  route: string;
  title: string;
}

export { INavigationLink };
