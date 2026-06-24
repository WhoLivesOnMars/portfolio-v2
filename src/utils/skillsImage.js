import html from '../assets/icons/skills/html.svg'
import nodejs from '../assets/icons/skills/nodejs.svg'
import docker from '../assets/icons/skills/docker.svg'
import css from '../assets/icons/skills/css.svg'
import symfony from '../assets/icons/skills/symfony.svg'
// import angular from '../assets/icons/skills/angular.svg'
import javascript from '../assets/icons/skills/javascript.svg'
import react from '../assets/icons/skills/react.svg'
import laravel from '../assets/icons/skills/laravel.svg'
import sass from '../assets/icons/skills/sass.svg'
import typescript from '../assets/icons/skills/typescript.svg'
import bootstrap from '../assets/icons/skills/bootstrap.svg'
import mongoDB from '../assets/icons/skills/mongoDB.svg'
import mysql from '../assets/icons/skills/mysql.svg'
import postgresql from '../assets/icons/skills/postgresql.svg'
import tailwind from '../assets/icons/skills/tailwind.svg'
import vitejs from '../assets/icons/skills/vitejs.svg'
import csharp from '../assets/icons/skills/csharp.svg'
import jira from '../assets/icons/skills/jira.svg'
import confluence from '../assets/icons/skills/confluence.svg'
import reactNative from '../assets/icons/skills/reactNative.svg'
import kotlin from '../assets/icons/skills/kotlin.svg'
import php from '../assets/icons/skills/php.svg'
import python from '../assets/icons/skills/python.svg'
import ruby from '../assets/icons/skills/ruby.svg'
import git from '../assets/icons/skills/git.svg'
import wordpress from '../assets/icons/skills/wordpress.svg'
import blender from '../assets/icons/skills/blender.svg'
import figma from '../assets/icons/skills/figma.svg'
import unity from '../assets/icons/skills/unity.svg'
import sapERP from '../assets/icons/skills/sap-erp.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'nodejs':
            return nodejs;
        case 'docker':
            return docker;
        case 'css':
            return css;
        case 'symfony':
            return symfony;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'laravel':
            return laravel;
        case 'sass':
            return sass;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'c#':
            return csharp;
        case 'kotlin':
            return kotlin;    
        case 'reactNative':
            return reactNative;
        case 'jira':
            return jira;
        case 'confluence':
            return confluence;   
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'git':
            return git;
        case 'wordpress':
            return wordpress;
        case 'blender':
            return blender;
        case 'figma':
            return figma;
        case 'unity':
            return unity;
        case 'sap erp':
            return sapERP;
        default:
            break;
    }
}