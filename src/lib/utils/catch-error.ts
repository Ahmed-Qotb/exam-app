// ? cleaner way to handle errors in fetch apis
export async function catchError<T>(callback: () => Promise<APIResponse<T>>): Promise<[SuccessfulResponse<T> | null, Error | null]> {
  try {
    const payload = await callback();

    if ("code" in payload) throw new Error(payload.message);

    return [payload, null];
  } catch (error) {
    return [null, error instanceof Error ? error : new Error(String(error))];
  }
}
