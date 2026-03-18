import { expect, test } from "@playwright/test";

test("homepage renders key conversion sections", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1 })).toContainText("I design and build digital products");
  await expect(page.getByRole("link", { name: "See the work" })).toBeVisible({ timeout: 15000 });
  await expect(
    page.getByRole("heading", { name: "From first brief to shipped product, the process should stay clear." })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "If you need a senior full-stack engineer who can think clearly, move quickly, and own the product end to end, we should talk."
    })
  ).toBeVisible();
});
