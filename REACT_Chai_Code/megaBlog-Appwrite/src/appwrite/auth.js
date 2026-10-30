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
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        // another method called
        return this.login({ email, password })
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
      return await this.account.createEmailPasswordSession(email, password)
    } catch (error) {
      throw error;
    }
  }

  /* Get current account for user */
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  /* logout current account for user */
  async logout(){
    try {
      return this.account.deleteSession();
    } catch (error) {
      throw error;
    }
  }

}


const authService = new AuthService();

export default authService;
