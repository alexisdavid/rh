<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Storelocations extends Model
{
   protected $table = 'storelocations';






   protected $fillable =  [
   'code',
   'name',
   'canceled',
   'isActive',
   'isPickLoc',
   'sequence',
   'canBeLinedUp',
   'maximumQuantity',
   'allowCountDuringCycleCount',
   'AllowCountDuringOtherOperation',
   'CountAfterNumberOfDays',
   'CountAfterNumberOfOperations',
   'NeedsToBeCounted',
   'LockedBy',
   'BlockMoveWhenNotEmpty',
   'WarnOnAddingDifferentItemOrLot',
   'LocationType',
   'DirectConsumptionOnProductionManager',
   'MaxLogUnits',
   'QualityStatusCode',
   'BlockStockFromBeingUsedOnProposal',
   'ItemStorageLocationType',
   'PriorityPicking',
   'VerificationCode'];





}
