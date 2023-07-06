import { useState } from "react";
import { TabItem } from "./TabItem";
import './Tabs.css'

export const Tabs = ({ list, activeTab, onTabSwitch}) => {
    let active = activeTab === '' ? list[0] : activeTab;
    console.log(active);
    return (
        <div className="tab-continer">
            <div className="tab-inside">
                {list.map((item, index) => {
                    return (
                        <TabItem 
                            title={item}
                            key={index}
                            index={index}
                            active={active === item}
                            setActive={onTabSwitch}
                            />
                    )
                })}
            </div>
        </div>
    )
}