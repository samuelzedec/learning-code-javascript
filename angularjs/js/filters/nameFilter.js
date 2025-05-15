/* 
 * Formato os nomes para ficarem tudo no mesmo padrão.
 */

angular.module("contactList").filter("name", () => {
  return function (input) {
    if (!input) return "";

    const nameList = input.split(" ");
    const nameListFormated = nameList.map((name) => {
      if (/(da|de)/i.test(name)) return name.toLowerCase();

      return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    });

    return nameListFormated.join(" ");
  };
});