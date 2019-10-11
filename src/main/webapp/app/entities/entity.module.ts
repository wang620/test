import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestRegionModule } from './region/region.module';
import { TestCountryModule } from './country/country.module';
import { TestLocationModule } from './location/location.module';
import { TestDepartmentModule } from './department/department.module';
import { TestTaskModule } from './task/task.module';
import { TestEmployeeModule } from './employee/employee.module';
import { TestJobModule } from './job/job.module';
import { TestJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TestRegionModule,
        TestCountryModule,
        TestLocationModule,
        TestDepartmentModule,
        TestTaskModule,
        TestEmployeeModule,
        TestJobModule,
        TestJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestEntityModule {}
