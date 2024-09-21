import './Skills.css';


function Skills() {
    const toggleSkills = (e) => {
        const itemClass = e.currentTarget.parentNode.parentNode.className

        if (itemClass === 'skills__content skills__close') {
            e.currentTarget.parentNode.parentNode.className = 'skills__content skills__open'
        } else {
            e.currentTarget.parentNode.parentNode.className = 'skills__content skills__close'
        }
    }

    return (

        <section class="skills section" id="skills">
            <h2 class="section__title" i18n="skills__title">Skills</h2>
            <span class="section__subtitle" i18n="skills__subtitle"
            >My technical level</span
            >

            <div class="skills__container container grid">
                <div>
       
                    <div class="skills__content skills__open"
                    >
                        <div class="skills__header">
                            <i class="uil uil-percentage skills__icon"></i>

                            <div>
                                <h1 class="skills__title" i18n="home__subtitle">
                  Data scientist/ Data analyst
                                </h1>
                                <span class="skills__subtitle" i18n="skills__years"
                                >More than 3 years</span
                                >
                            </div>

                            <i class="uil uil-angle-down skills__arrow" onClick={toggleSkills}
                            ></i>
                        </div>

                        <div class="skills__list grid">

                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/python--v1.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Python</h3>
                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img"
                                    src="https://www.clipartmax.com/png/middle/13-137348_logo-r-programming.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">R</h3>
                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img" 
                                    src="https://img.icons8.com/color/48/000000/tableau-software.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Tableau</h3>

                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/mysql-logo.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">MySQL</h3>
                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/mongodb.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">MongoDB</h3>
                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/power-bi.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Power BI</h3>
                                </div>
                            </div>


                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/amazon-web-services.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">AWS</h3>
                                </div>
                            </div>
                            {/* databrick */}
                            <div class="skills__data">
                                <img class = "skills__img" src="https://s3.us-east-1.amazonaws.com/accredible_temp_credential_images/16002836894132567677717491881160.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Databricks</h3>
                                </div>
                            </div>

                            {/* spark */}
                            <div class="skills__data">
                                <img class = "skills__img" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_spark_logo_icon_170560.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Spark</h3>
                                </div>
                            </div>

                            {/* snowflakes */}
                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/snowflake.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Snowflake</h3>
                                </div>
                            </div>

                            {/* excel */}
                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/microsoft-excel-2019--v1.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Excel</h3>
                                </div>
                            </div>

                            {/* clickhouse */}

                            <div class="skills__data">
                                <img class = "skills__img" src="https://cdn.worldvectorlogo.com/logos/clickhouse.svg"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Clickhouse</h3>
                                </div>
                            </div>

                            {/* postgresql*/}
                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/postgreesql.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">PostgreSQL</h3>
                                </div>
                            </div>

                            {/* pytorch */}
                            <div class="skills__data">
                                <img class = "skills__img" src="https://pytorch.org/assets/images/pytorch-logo.png" alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Pytorch</h3>
                                </div>
                            </div>

                

              

                        </div>
                    </div>
       
                    <div class="skills__content skills__close">
                        <div class="skills__header">
                            <i class="uil uil-brackets-curly skills__icon"></i>

                            <div>
                                <h1 class="skills__title" i18n="skills__title2">
                  Web developer
                                </h1>
                                <span class="skills__subtitle" i18n="skills__years2"
                                >More than 1 years</span
                                >
                            </div>

                            <i class="uil uil-angle-down skills__arrow" onClick={toggleSkills} ></i>
                        </div>

                        <div class="skills__list grid">


                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/html-5--v1.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">HTML</h3>
                                </div>
                            </div>
              
                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/css3.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">CSS</h3>
                                </div>
                            </div>
              
                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/javascript--v1.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">JavaScript</h3>
                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/react-native.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">React</h3>
                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/bootstrap.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Bootstrap</h3>
                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Java</h3>
                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/python--v1.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Python</h3>
                                </div>
                            </div>

                            {/* restapi */}
                            <div class="skills__data">
                                <img class = "skills__img" src="https://www.clipartmax.com/png/middle/285-2851044_restful-search-api-rest-web-services-logo.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">REST API</h3>
                                </div>
                            </div>

                            {/* nodejs */}
                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/nodejs.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Node.js</h3>
                                </div>
                            </div>

                            {/* heroku */}
                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/heroku.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Heroku</h3>
                                </div>
                            </div>

                            {/* mongodb */}
                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/mongodb.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">MongoDB</h3>
                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img" src="https://img.icons8.com/color/48/000000/git.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">Git</h3>
                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img" src="https://cdn.icon-icons.com/icons2/2107/PNG/48/file_type_vscode_icon_130084.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">VS Code</h3>
                                </div>
                            </div>

                            <div class="skills__data">
                                <img class = "skills__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1024px-IntelliJ_IDEA_Icon.svg.png"alt=""/>
                                <div class="skills__titles">
                                    <h3 class="skills__name">IntelliJ</h3>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;