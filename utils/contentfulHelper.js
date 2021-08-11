import { createClient } from "contentful";
import { Config } from "./config";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default class ContentfulHelper {
  /**
   * Get the total number of articles
   * @returns Total article number
   */
  static async getTotalArticlesNumber() {
    const res = await client.getEntries({
      content_type: "news",
      limit: 0,
    });

    const totalArticles = res.total ? res.total : 0;

    return totalArticles;
  }

  /**
   * Fetches the specific article page
   * @param {number} page - Page of articles to fetch
   * @returns Object containing articles and the their total count
   */
  static async getArticlePage(page) {
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip =
      skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

    const res = await client.getEntries({
      content_type: "news",
      select:
        "fields.slug,fields.title,fields.tags,fields.thumbnail,sys.contentType,sys.createdAt",
      limit: Config.pagination.pageSize,
      skip: skip,
      order: "-sys.createdAt",
    });

    const articlePage = res.items
      ? { totalCount: res.total, articles: res.items }
      : { totalCount: 0, articles: [] };

    return articlePage;
  }
}
