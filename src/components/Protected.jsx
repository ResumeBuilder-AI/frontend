import { SessionAuth } from "supertokens-auth-react/recipe/session";

export function Protected({Component}){
    return (
        <SessionAuth>
            <Component />
        </SessionAuth>
    )
}