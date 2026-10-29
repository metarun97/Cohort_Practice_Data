import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
    this.account = new Account(this.client);
  }

  /* Create account for user */
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(email, password, name);
      if (userAccount) {
        // another method called
      } else {
        return userAccount
      }
    } catch (error) {
      throw error;
    }
  }

  /* Login account for user */
  async login({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password)
    } catch (error) {
      throw error;
    }
  }
}


const authService = new AuthService();

export default authService;
