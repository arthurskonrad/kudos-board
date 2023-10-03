type Person = {
  name: string;
  id: string;
};

export type KudosModelType = {
  title: string;
  description: string;
  slug?: string;
  from: Person;
  to: Person;
  createdAt: Date;
  updatedAt: Date;
  status: string;
};

export default class KudosModel {
  public title: string;
  public description: string;
  public slug?: string;
  public from: Person;
  public to: Person;
  public createdAt: Date;
  public updatedAt: Date;
  public status: string;

  constructor(public data: KudosModelType) {
    this.title = data.title;
    this.description = data.description;
    this.slug = data.slug;
    this.from = data.from;
    this.to = data.to;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.status = data.status;
  }

  public getData() {
    return {
      title: this.title,
      description: this.description,
      slug: this.slug,
      from: this.from,
      to: this.to,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      status: this.status,
    };
  }
}
