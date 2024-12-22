using System.IO;

namespace backend.Mailing;

public class FileManager
{
    private readonly string _filePath;
    private readonly byte[] _fileData;

    FileManager(string filePath, byte[]fileData)
    {
        _filePath = filePath;
        _fileData = fileData;
    }

    public void UploadFile()
    {
        if (!File.Exists(_filePath))
        {
            using (FileStream fs = File.Create(_filePath))
            {
                fs.Write(_fileData, 0, _fileData.Length);
            }
        }
    }
}