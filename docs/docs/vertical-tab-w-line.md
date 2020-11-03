---
id: vertical-tabs-w-line
title: Vertical Tabs With Line
sidebar_label: Vertical Tabs With Line
---

``` html live
<>
<div class="lil-flex"> 
    <div class="lil-w-2/5 sm:lil-hidden">
        <ul class="lil-vertical-tabs">
            <li class="lil-vertical-tab lil-vertical-tab-active" onclick="verticalTabsWLine(event,'tab1')">
                <a class="lil-vertical-tab-container">
                    <div class="lil-vertical-tab-line"></div>
                    <div class="lil-vertical-tab-content">
                        <div class="lil-w-1/6">
                            <img height="32" width="32" src="https://assets1.cleartax-cdn.com/cleartax/images/1604377557_icon_purple_house.png"/>
                        </div>
                        <div class="lil-w-5/6">
                            <div class="lil-vertical-tab-heading">Prepare </div>
                        </div>
                        <div class="lil-vertical-tab-writeup">
                            File in under 30 seconds with power workflows such as NIL
                            filing and auto-filed 3B and 9 Forms.
                        </div>
                    </div>
                    <div class="lil-vertical-tab-arrow">&#8594;</div>
                </a>
            </li>
            <li class="lil-vertical-tab" onclick="verticalTabsWLine(event,'tab2')">
                <a class="lil-vertical-tab-container">
                    <div class="lil-vertical-tab-line"></div>
                    <div class="lil-vertical-tab-content">
                        <div class="lil-w-1/6">
                            <img height="32" width="32" src="https://assets1.cleartax-cdn.com/cleartax/images/1604377786_icon_pink_individual.png"/>
                        </div>
                        <div class="lil-w-5/6">
                            <div class="lil-vertical-tab-heading">Import </div>
                        </div>
                        <div class="lil-vertical-tab-writeup">
                            File in under 30 seconds with power workflows such as NIL
                            filing and auto-filed 3B and 9 Forms.
                        </div>
                    </div>
                    <div class="lil-vertical-tab-arrow">&#8594;</div>
                </a>
            </li>
            <li class="lil-vertical-tab" onclick="verticalTabsWLine(event,'tab3')">
                <a class="lil-vertical-tab-container">
                    <div class="lil-vertical-tab-line"></div>
                    <div class="lil-vertical-tab-content">
                        <div class="lil-w-1/6">
                            <img height="32" width="32" src="https://assets1.cleartax-cdn.com/cleartax/images/1604380079_icon_blue_briefcase.png"/>
                        </div>
                        <div class="lil-w-5/6">
                            <div class="lil-vertical-tab-heading">Validate </div>
                        </div>
                        <div class="lil-vertical-tab-writeup">
                            File in under 30 seconds with power workflows such as NIL
                            filing and auto-filed 3B and 9 Forms.
                        </div>
                    </div>
                    <div class="lil-vertical-tab-arrow">&#8594;</div>
                </a>
            </li>
            <li class="lil-vertical-tab" onclick="verticalTabsWLine(event,'tab4')">
                <a class="lil-vertical-tab-container">
                    <div class="lil-vertical-tab-line"></div>
                    <div class="lil-vertical-tab-content">
                        <div class="lil-w-1/6">
                            <img height="32" width="32" src="https://assets1.cleartax-cdn.com/cleartax/images/1604380129_icon_green_sme.png"/>
                        </div>
                        <div class="lil-w-5/6">
                            <div class="lil-vertical-tab-heading">File </div>
                        </div>
                        <div class="lil-vertical-tab-writeup">
                            File in under 30 seconds with power workflows such as NIL
                            filing and auto-filed 3B and 9 Forms.
                        </div>
                    </div>
                    <div class="lil-vertical-tab-arrow">&#8594;</div>
                </a>
            </li>
            <li class="lil-vertical-tab" onclick="verticalTabsWLine(event,'tab5')">
                <a class="lil-vertical-tab-container">
                    <div class="lil-vertical-tab-line"></div>
                    <div class="lil-vertical-tab-content">
                        <div class="lil-w-1/6">
                            <img height="32" width="32" src="https://assets1.cleartax-cdn.com/cleartax/images/1604377557_icon_purple_house.png"/>
                        </div>
                        <div class="lil-w-5/6">
                            <div class="lil-vertical-tab-heading">Analyze </div>
                        </div>
                        <div class="lil-vertical-tab-writeup">
                            File in under 30 seconds with power workflows such as NIL
                            filing and auto-filed 3B and 9 Forms.
                        </div>
                    </div>
                    <div class="lil-vertical-tab-arrow">&#8594;</div>
                </a>
            </li>
        </ul>
    </div>
    <div id="vertSlick" class="lil-w-3/5 lil-items-center lil-flex lil-justify-center sm:lil-w-full">
        <div id="tab1" class="verticalTabsWLineContent lil-w-full lil-outline-none lil-flex lil-items-center lil-justify-center sm:lil-visible sm:lil-flex-col">
            <h4 class="xl:lil-hidden lg:lil-hidden md:lil-hidden">Don't Get Started</h4>
            <p class="xl:lil-hidden lg:lil-hidden md:lil-hidden">File in under 30 seconds with power workflows such as NIL
                filing and auto-filed 3B and 9 Forms.</p>
            <img src="https://assets1.cleartax-cdn.com/cleartax/images/1604314072_vert_tabs_line_mock.png"/>
        </div>
    </div>
</div>
</>
```
