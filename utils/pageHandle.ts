export function getMetaPage() {
    const meta:any = document.getElementsByTagName('meta');
    let metaObj = {};
    for (let item of meta) {
      const name = item.getAttribute("name");
      const property = item.getAttribute("property");
      const content = item.getAttribute("content");
      if (name) {
        metaObj = { ...metaObj, [name]: content }
      }
      if (property) {
        metaObj = { ...metaObj, [property]: content }
      }
    }
    return metaObj;
  }