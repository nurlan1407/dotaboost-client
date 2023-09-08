import { Routes,Route } from "react-router-dom";
import { RouterConfig } from "shared/config/routerConfig/routerConfig";
import React, {Suspense} from 'react';

export function AppRouter(){
    return(
        <Routes>
           {Object.values(RouterConfig).map(({ element, path }) => (
              <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<div>Loading...</div>}>
                            {element}
                    </Suspense>
                  )}
              />
          ))}
        </Routes>
    )
}

