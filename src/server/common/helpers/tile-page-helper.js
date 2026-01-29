/**
 * Helper to create view data for tile-based index pages
 * @param {Object} options
 * @param {string} options.pageTitle - Page title
 * @param {string} options.heading - Page heading
 * @param {string} options.description - Page description
 * @param {string} options.viewName - View template name
 * @param {string} options.itemsKey - Key name for items array in template
 * @param {Array<Object>} options.items - Array of tile items with title, description, href
 * @returns {Object} Object with view name and view data
 */
export function createTilePageData({
  pageTitle,
  heading,
  description,
  viewName,
  itemsKey,
  items
}) {
  return {
    viewName,
    viewData: {
      pageTitle,
      heading,
      description,
      breadcrumbs: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: heading
        }
      ],
      [itemsKey]: items
    }
  }
}
