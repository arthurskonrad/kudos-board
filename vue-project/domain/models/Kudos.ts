type Person = {
  name: string
  id: string
}

export type KudosModelType = {
  title: string
  description: string
  slug?: string
  panelSlug: string
  from: Person
  to: string
  createdAt: Date
  updatedAt: Date
  status: string
}

export default class KudosModel {
  public title: string
  public description: string
  public slug?: string
  public panelSlug?: string
  public from: Person
  public to: string
  public createdAt: Date
  public updatedAt: Date
  public status: string

  constructor(data: KudosModelType) {
    this.title = data.title
    this.description = data.description
    this.slug = data.slug
    this.panelSlug = data.panelSlug
    this.from = data.from
    this.to = data.to
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.status = data.status
  }

  public getData() {
    return {
      title: this.title,
      description: this.description,
      slug: this.slug,
      panelSlug: this.panelSlug,
      from: this.from,
      to: this.to,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      status: this.status
    }
  }
}
