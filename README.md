# Holdex Platform Frontend Scripts #
This packages includes scripts and configuration used by Holdex Platform Apps. Based on [react scripts](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts).


#### Scripts

#####fragments: `holdex-scripts fragments`

    Available properties:
    - API_URL (default https://api.cloud.holdex.io/gql/query)    

#####start: `holdex-scripts start`
    
    Available properties:
     - PORT (default 3000)
     
#####build: `holdex-scripts build`
    
    Available properties:
     - BUILD_FOLDER (default /build)
     - ENV_FILE (default .env)

#####test: `holdex-scripts test --env=jsdom`


#### How To install
    yarn add holdex-scripts@https://github.com/holdex/hp-frontend-scripts#<tag>