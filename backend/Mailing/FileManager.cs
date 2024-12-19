/*using System.IO;
using System;

namespace Mailing;

public class FileManager
{
    private readonly string _filePath;
    private readonly string _fileData;

    FileManager(string filePath, string fileData)
    {
        _filePath = filePath;
        _fileData = fileData;
    }
    
    if (!File.Exists(_filePath))
    {
        using (FileStream fs = File.Create(_filePath))
        {
            fs.Write(_fileData, 0, _fileData.Length);
        }
    }
}
*/
