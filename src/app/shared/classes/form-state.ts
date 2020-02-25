/*
  Для реализации состояний загрузки / ошибки и т.д формы.
 */
export abstract class FormState {
  private loading: boolean;
  private valid: boolean;
  private requesting: boolean;
  private requestError: string;
  private loadingError: string;
  get isLoading() {
    return this.loading;
  }
  set setLoading(value: boolean) {
    this.loading = value;
  }

  get isValid() {
    return this.valid;
  }
  set setValid(value: boolean) {
    this.valid = value;
  }

  get isRequesting() {
    return this.requesting;
  }
  set setRequesting(value: boolean) {
    this.requesting = value;
  }

  get isRequestError(): boolean {
    return this.requestError.length > 0;
  }
  get requestErrorValue(): string {
    return this.requestError;
  }
  set setRequestError(value: string) {
    this.requestError = value;
  }

  get isLoadingError(): boolean {
    return this.loadingError.length > 0;
  }
  get loadingErrorValue(): string {
    return this.loadingError;
  }
  set setLoadingError(value: string) {
    this.loadingError = value;
  }

}
