import HooksExample from "../ReactHookExamples/HooksExample";
import SetInternalWithUseState from "../ReactHookExamples/SetInternalWithUseState";

import {
    SideMenuStyles,
    TopDownMenuStyles,
    CommonStyles,
} from "../CommonStyles/SideMenuStyles";

function StyledCompExample() {
    return (
        <CommonStyles>
            <SideMenuStyles type="right" width={"100px"} />
            <TopDownMenuStyles type="top">
                <HooksExample />
                <SetInternalWithUseState />
            </TopDownMenuStyles>
        </CommonStyles>

    );
}

export default StyledCompExample;
