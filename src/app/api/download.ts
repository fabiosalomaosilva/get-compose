import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';


const downloadHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // Create the YAML content
  const yamlContent = `
    # Your YAML content here
  `;

  // Set the response headers for file download
  res.setHeader('Content-Disposition', 'attachment; filename="file.yaml"');
  res.setHeader('Content-Type', 'application/x-yaml');

  // Write the YAML content to a file
  fs.writeFileSync('/path/to/file.yaml', yamlContent);

  // Stream the file to the response
  const fileStream = fs.createReadStream('/path/to/file.yaml');
  fileStream.pipe(res);
};

export default downloadHandler;