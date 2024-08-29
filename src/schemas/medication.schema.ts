import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MedicationDocument = Medication & Document;

@Schema()
export class Medication {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  dosage: string;

  @Prop()
  description: string;
}

export const MedicationSchema = SchemaFactory.createForClass(Medication);
