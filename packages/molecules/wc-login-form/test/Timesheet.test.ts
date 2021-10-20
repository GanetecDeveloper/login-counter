import { expect, fixture, html } from '@open-wc/testing';
import { WcLoginFormView } from '../src/WcLoginFormView';
import { TimesheetType } from '../src/WcLoginFormViewModel';

// const defaultTimesheet = html`<wc-rrhh-timesheet></wc-rrhh-timesheet>`;

// const withType = (type: TimesheetType) =>
//   html`<wc-rrhh-timesheet .type=${type}></wc-rrhh-timesheet>`;

// const withTimesheetKeypadData = (timesheetKeypadData: TimesheetKeypadData) =>
//   html`<wc-rrhh-timesheet
//     .timesheetKeypadData=${timesheetKeypadData}
//   ></wc-rrhh-timesheet>`;

// const fullTimesheet = (
//   type: TimesheetType,
//   timesheetKeypadData: TimesheetKeypadData
// ) =>
//   html`<wc-rrhh-timesheet
//     .type=${type}
//     .timesheetKeypadData=${timesheetKeypadData}
//   ></wc-rrhh-timesheet>`;

// describe('wc-rrhh-timesheet', () => {
//   let element: WcRrhhTimesheetView;

//   beforeEach(async () => {
//     element = await fixture(defaultTimesheet);
//   });

//   it('initializes as an wc-rrhh-timesheet', () => {
//     expect(element).instanceOf(WcRrhhTimesheetView);
//   });

//   it('the "timesheetKeypadData" property is empty', async () => {
//     (element.timesheetKeypadData as unknown) = {};
//     await element.updateComplete;
//     expect(element.timesheetKeypadData).to.be.empty;

//     element.timesheetKeypadData = emptyTimesheetKeypad;
//     await element.updateComplete;
//     expect(element.timesheetKeypadData).to.be.empty;
//   });

//   it('the "type" property is equal to "monthly"', async () => {
//     element = await fixture(withType('monthly'));
//     expect(element.type).to.equal('monthly');
//   });

//   it('the "type" property is equal to "maintenance"', async () => {
//     element = await fixture(withType('maintenance'));
//     expect(element.type).to.equal('maintenance');
//   });

//   it('the "type" property is equal to "yearly"', async () => {
//     element = await fixture(withType('yearly'));
//     expect(element.type).to.equal('yearly');
//   });

//   it('the "timesheetKeypadData" property is not empty', async () => {
//     element = await fixture(withTimesheetKeypadData(timesheetKeypadData));
//     expect(element.timesheetKeypadData.professional).to.equal('PROFESSIONAL 1');
//     expect(element.timesheetKeypadData.selectorMonth).to.be.true;
//     expect(element.timesheetKeypadData.selectorYear).to.be.false;
//     expect(element.timesheetKeypadData.selectorIncidences).to.be.false;
//     expect(element.timesheetKeypadData.contractsButton).to.be.false;
//     expect(element.timesheetKeypadData.reportMenuButton).to.be.false;
//     expect(element.timesheetKeypadData.filterButton).to.be.true;
//     expect(element.timesheetKeypadData.downloadButton).to.be.true;
//   });

//   it('the "professionals" property with "type" property is equal to "monthly"', async () => {
//     element = await fixture(fullTimesheet('monthly', timesheetKeypadData));
//     expect(element.type).to.equal('monthly');
//   });

//   it('the "professionals" property with "type" property is equal to "maintenance"', async () => {
//     element = await fixture(fullTimesheet('maintenance', timesheetKeypadData));
//     expect(element.type).to.equal('maintenance');
//   });

//   it('the "professionals" property with "type" property is equal to "yearly"', async () => {
//     element = await fixture(fullTimesheet('yearly', timesheetKeypadData));
//     expect(element.type).to.equal('yearly');
//   });
// });
