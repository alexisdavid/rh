<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PersonalInfinityController;
use App\Http\Controllers\CapacitationsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', [AuthController::class, 'register'])->middleware('auth:sanctum');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/datauser', [AuthController::class, 'dataUser'])->middleware('auth:sanctum');
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/getColaborators', [PersonalInfinityController::class, 'index'])->middleware('auth:sanctum');
Route::get('/personalHana/allData/{id}', [PersonalInfinityController::class, 'indexAdionales'])->middleware('auth:sanctum');
Route::post('humanResourses/newColaborator', [PersonalInfinityController::class, 'store'])->middleware('auth:sanctum');
Route::put('humanResourses/updateColaborator/{id}', [PersonalInfinityController::class, 'update'])->middleware('auth:sanctum');
Route::get('humanResourses/getVacations/{id}', [PersonalInfinityController::class, 'show'])->middleware('auth:sanctum');
Route::post('humanResourses/saveVacation/{id}', [PersonalInfinityController::class, 'saveVacation'])->middleware('auth:sanctum');
Route::put('humanResourses/updateVacation/{id}', [PersonalInfinityController::class, 'updateVacation'])->middleware('auth:sanctum');
Route::post('humanResourses/getEvents', [PersonalInfinityController::class, 'getEvents'])->middleware('auth:sanctum');
Route::post('capacitationsHana/satoreEvent', [PersonalInfinityController::class, 'saveEvents'])->middleware('auth:sanctum');



// Route::put('humanResourses/updateColaborator/{id}', 'PersonalHana@update');   // Alexis Create 13/05/2022
// Route::post('humanResourses/updateImageColaborator/{id}', 'PersonalHana@uploadPhoto');  

