import {
  Model,
  Document,
  UpdateQuery,
  FilterQuery,
  DocumentDefinition,
  QueryOptions,
  Schema,
  Query,
} from 'mongoose';

export default abstract class RepositoryBase<T extends Document<T>> {
  private readonly repo: Model<T>;

  constructor(repo: Model<T>) {
    this.repo = repo;
  }

  get(id: string) {
    return this.repo.findById(id) as Promise<T>;
  }

  getByQuery(filter: FilterQuery<T>) {
    return this.repo.findOne(filter) as Query<T, T, T>;
  }

  list(filter: FilterQuery<T>) {
    return this.repo.find(filter) as Promise<T[]>;
  }

  listAll() {
    return this.repo.find() as Promise<T[]>;
  }

  async save(doc: Omit<DocumentDefinition<T>, '_id' | 'id'>) {
    const entity = await this.repo.create(doc);
    entity.save();
    return entity;
  }

  update(
    id: Schema.Types.ObjectId,
    doc: UpdateQuery<T>,
    options: QueryOptions
  ) {
    return this.repo.findByIdAndUpdate(id, doc, options) as Promise<T>;
  }

  updateByQuery(
    filter: FilterQuery<T>,
    doc: UpdateQuery<T>,
    options: QueryOptions
  ) {
    return this.repo.findOneAndUpdate(filter, doc, options) as Promise<T>;
  }

  delete(id: string) {
    return this.repo.findByIdAndRemove(id);
  }
}
