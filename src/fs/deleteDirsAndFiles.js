import fs from 'fs'


async function _deleteRecursive(pathToDelete) {
  try {
    // Check if path exists
    fs.access(pathToDelete);
  } catch (err) {
    // If path does not exist, resolve immediately
    return [];
  }

  try {
    // Get stats for the path
    const stats = await fs.promises.stat(pathToDelete);

    if (stats.isDirectory()) {
      // Delete directory recursively
      await fs.promises.rm(pathToDelete, { recursive: true });
      return pathToDelete;
    } else {
      // Delete file
      await fs.promises.unlink(pathToDelete);
      return pathToDelete;
    }
  } catch (err) {
    if (err.code === 'ENOENT') return
    else throw err
  }
}


export default async function deleteDirsAndFiles(pathsToDelete) {
  const deletedPaths = [];

  return Promise.all(pathsToDelete.map(pathToDelete => _deleteRecursive(pathToDelete)))
    .then(results => {
      // Flatten the array of deleted paths
      results. forEach(path => {
        if (path) deletedPaths.push(path); // if path is null, it means it was not deleted. Don't add it to the array
      });
      return deletedPaths;
    })
    .catch(err => {
      if (err.code === 'ENOENT') return null
      else throw err
    });
}