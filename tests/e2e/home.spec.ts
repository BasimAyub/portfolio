import { expect, test } from "@playwright/test";

test("homepage renders key conversion sections", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1 })).toContainText("I design and build digital products");
  await expect(page.getByRole("link", { name: "See the work" })).toBeVisible({ timeout: 15000 });
  await expect(
    page.getByRole("heading", { name: "Things I've built." })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Let's work together." })
  ).toBeVisible();
});
