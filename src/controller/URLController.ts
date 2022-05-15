import { Request, response, Response } from "express";
import shortId from "shortid";
import { config } from "../config/Constants";

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    const { originURL } = req.body;
    const hash = shortId.generate();
    const shortUrl = `${config.API_URL}/${hash}`;
    response.json({ originURL, hash, shortUrl });
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;
    const url = {
      originURL: "asdfafda",
      hash: "afdafa",
      shortURL: "fadfafasfafds",
    };
    response.redirect(url.originURL);
  }
}
