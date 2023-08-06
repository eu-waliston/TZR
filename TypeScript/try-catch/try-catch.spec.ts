import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "suceed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure");
    }
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
  }
  //   } catch (e: any) {
  //     return e.message;
  //   }

  /*
    } catch (e) {
    return (e as Error).message;
    }
    */
};

it("Should return the message with it faulure", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure");
});
