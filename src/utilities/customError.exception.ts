/**
 * Custom error class for handling foreign-key-not-found error
 * @param {string} message - Error message
 */
export class ForeignKeyNotFound extends Error {
  private readonly code: string;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    this.code = "foreign-key-not-found";
  }
}
