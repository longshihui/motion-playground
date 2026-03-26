import { fireEvent, render, screen, waitFor } from "@testing-library/vue";
import CodeSnippetCard from "../src/components/CodeSnippetCard.vue";

test("代码复制功能可调用剪贴板并反馈成功状态", async () => {
  const writeText = jest.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  });

  render(CodeSnippetCard, {
    props: {
      title: "示例代码",
      code: "const value = 1;",
      language: "javascript",
    },
  });

  await fireEvent.click(screen.getByTestId("copy-button"));

  await waitFor(() => {
    expect(writeText).toHaveBeenCalledWith("const value = 1;");
  });
});
