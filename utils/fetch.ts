import { Schema, z } from "zod";

type fetchOptions = {
  endpoint: string;
  method: "GET" | "POST";
  schema: Schema;
  body?: Object;
};

export async function customFetch<TSchema extends Schema>({
  endpoint,
  method,
  schema,
  body,
}: {
  endpoint: string;
  method: "GET" | "POST";
  schema: TSchema;
  body?: Object;
}): Promise<
  | { success: boolean; message: string; data: z.infer<TSchema> }
  | { success: boolean; message: string; data: null }
> {
  if (method === "POST") {
    try {
      const response = await fetch(endpoint, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("Falied to fetch from the server");
      }
      const jsonResponse = await response.json();
      const parsedJson = schema.safeParse(jsonResponse.data);

      if (parsedJson.error) {
        return {
          success: false as const,
          message: "There was problem parsing the data",
          data: null,
        };
      }

      return {
        success: true as const,
        message: "Success",
        data: parsedJson.data,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false as const,
        message: "There was a network or server error",
        data: null,
      };
    }
  }

  return {
    success: false,
    message: "",
    data: null,
  };
}
