export function base64Convertor(files, callback) {
  if (!files) {
    return callback(new Error("image not found"));
  }

  var reader = new FileReader();
  reader.readAsBinaryString(files);

  reader.onload = function() {
    let base64 = btoa(reader.result);
    let { name, type } = files;
    base64 = `data:${type};base64,${base64}`;
    callback(null, {
      data: base64,
      name
    });
  };
  reader.onerror = function() {
    callback(new Error("image could not convert base 64"));
  };
}
