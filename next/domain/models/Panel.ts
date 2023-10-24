export type PanelModelType = {
  title: string;
  description: string;
  slug?: string;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
  password: string;
  clientPassword: string;
  status: string;
};

export default class PanelModel {
  public title: string;
  public description: string;
  public slug?: string;
  public owner: string;
  public createdAt: Date;
  public updatedAt: Date;
  public password: string;
  public clientPassword: string;
  public status: string;

  constructor(data: PanelModelType) {
    this.title = data.title;
    this.description = data.description;
    this.slug = data.slug;
    this.owner = data.owner;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.password = data.password;
    this.clientPassword = data.clientPassword;
    this.status = data.status;
  }

  public getData() {
    return  {
      title: this.title,
      description: this.description,
      slug: this.slug,
      owner: this.owner,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      password: this.password,
      clientPassword: this.clientPassword,
      status: this.status,
    };
  }
}
