export async function fetchItem(id) {
  return id == 1
    ? {
        title: 'item',
        content: 'test item 1',
      }
    : {
        title: 'item',
        content: 'test item 2',
      }
}
