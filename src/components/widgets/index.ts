import type { FC } from 'react';
import type { WidgetState } from '../../data/types';
import RangeNumberWidget from './RangeNumberWidget';
import GaugeWidget from './GaugeWidget';
import ElasticTableWidget from './ElasticTableWidget';
import AdvancedTableWidget from './AdvancedTableWidget';
import SimpleTableWidget from './SimpleTableWidget';
import GraphWidget from './GraphWidget';
import SmartHoursWidget from './SmartHoursWidget';
import ScatterGraphWidget from './ScatterGraphWidget';
import SankeyWidget from './SankeyWidget';
import DataInputWidget from './DataInputWidget';
import OcrWidget from './OcrWidget';
import InventoryWidget from './InventoryWidget';
import InsightsWidget from './InsightsWidget';
import VisualizationWidget from './VisualizationWidget';
import TaskWidget from './TaskWidget';
import WorkflowWidget from './WorkflowWidget';

/**
 * Registry of interactive widget recreations, keyed by the string used in a
 * lesson layout's `widget` field. Add new widget types here as lessons need them.
 */
export const WIDGETS: Record<string, FC<WidgetState>> = {
  rangeNumber: RangeNumberWidget,
  gauge: GaugeWidget,
  elasticTable: ElasticTableWidget,
  advancedTable: AdvancedTableWidget,
  simpleTable: SimpleTableWidget,
  graph: GraphWidget,
  smartHours: SmartHoursWidget,
  scatter: ScatterGraphWidget,
  sankey: SankeyWidget,
  dataInput: DataInputWidget,
  ocr: OcrWidget,
  inventory: InventoryWidget,
  insights: InsightsWidget,
  visualization: VisualizationWidget,
  task: TaskWidget,
  workflow: WorkflowWidget,
};
