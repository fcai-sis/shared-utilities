/**
 * Custom error class for handling foreign-key-not-found error
 * @param {string} message - Error message
 */
export class ForeignKeyNotFound extends Error {
  private readonly _code: string;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    this._code = "foreign-key-not-found";
  }

  /**
   * Getter for the error code
   */
  get code(): string {
    return this._code;
  }
}
