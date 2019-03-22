import {chain, noop, Rule, Tree} from '@angular-devkit/schematics';
import {
  addModuleImportToModule,
  buildComponent,
  findModuleFromOptions,
} from '@angular/cdk/schematics';
import {Schema} from './schema';

// // You don't have to export the function as default. You can also have more than one rule factory
// // per file.
// /**
//  * Scaffolds a new table component.
//  * Internally it bootstraps the base component schematic
//  */
// export default function(options: Schema): Rule {
//   return chain([
//     buildComponent({...options}, {
//       template: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html',
//       stylesheet: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.__styleext__',
//     }),
//     options.skipImport ? noop() : addFormModulesToModule(options)
//   ]);
// }

export function schematicTorqTest(options: Schema): Rule {
  return chain([
    buildComponent({...options}, {
      template: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html',
      stylesheet: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.__styleext__',
    }),
    options.skipImport ? noop() : addFormModulesToModule(options)
  ]);
}


/**
 * Adds the required modules to the relative module.
 */
function addFormModulesToModule(options: Schema) {
  return (host: Tree) => {
    const modulePath = findModuleFromOptions(host, options)!;
    addModuleImportToModule(host, modulePath, 'MatButtonModule', '@angular/material');
    return host;
  };
}


