
import SuperTokens from "supertokens-auth-react";
import ThirdPartyEmailPassword, {Google} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { API_URL, APP_NAME, SUPERTOKENS, WEB_URL } from "../config/config";

SuperTokens.init({
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: APP_NAME,
        apiDomain: API_URL,
        websiteDomain: WEB_URL,
        apiBasePath: SUPERTOKENS.authPath,
        websiteBasePath: SUPERTOKENS.authPath
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            signInAndUpFeature: {
                providers: [
                    Google.init(),
                ]
            }
        }),
        Session.init()
    ]
});