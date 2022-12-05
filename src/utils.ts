import { createHash } from "crypto";
import { createReadStream } from "fs";

export function createFileHash(
  filePath: string,
  algorithm = "md5"
): Promise<string> {
  // Algorithm depends on availability of OpenSSL on platform
  // Another algorithms: 'sha1', 'md5', 'sha256', 'sha512' ...
  return new Promise((resolve, reject) => {
    const shasum = createHash(algorithm);
    try {
      const stream = createReadStream(filePath);
      stream.on("data", function (data) {
        shasum.update(data);
      });
      // making digest
      stream.on("end", function () {
        const hash = shasum.digest("hex");
        return resolve(hash);
      });
    } catch (error) {
      return reject("calc fail");
    }
  });
}
